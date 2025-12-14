import React, { useEffect, useState } from "react";
import { fetchNeeds, NeedItem } from "../services/donations";

interface NeedsListProps {
  listId?: string;
  title?: string;
  limit?: number;
  className?: string;
}

/**
 * Busca e renderiza uma lista de necessidades.
 * Usa as classes CSS já presentes: donations-needs-list / donations-needs-item
 */
const NeedsList: React.FC<NeedsListProps> = ({ listId, title = "Necessidades atuais", limit, className }) => {
  const [items, setItems] = useState<NeedItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchNeeds(listId)
      .then((data) => {
        if (!mounted) return;
        setItems(limit ? data.slice(0, limit) : data);
        setError(null);
      })
      .catch((err) => {
        if (!mounted) return;
        setError(err.message || "Erro ao carregar");
        setItems([]);
      })
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, [listId, limit]);

  return (
    <div className={`donations-needs ${className ?? ""}`}>
      <h2 className="donations-needs-title">{title}</h2>

      {loading && <p>Carregando…</p>}
      {error && <p role="alert">Erro: {error}</p>}

      {!loading && !error && items && (
        <ul className="donations-needs-list" aria-live="polite">
          {items.length === 0 && <li className="donations-needs-item">Nenhuma necessidade encontrada</li>}
          {items.map((it) => (
            <li key={it.id} className="donations-needs-item">
              {it.name}
              {it.quantity ? ` — ${it.quantity}` : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NeedsList;
import { Genre } from '../App';
import { Button } from './Button';

interface SideBarProps {
  genres: Genre[];
  selectedGenreId: number;
  onGenreSelect: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, onGenreSelect }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onGenreSelect(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}

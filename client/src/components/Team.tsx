interface teamProps {
  title: string;
  img: string;
  link: string;
  updateTeam: (current: string) => void;
}

export default function Team({ title, img, link, updateTeam }: teamProps) {
  return (
    <div
      className="w-60 h-44 bg-pink-500 rounded mr-4 hover:scale-105 mb-4 md:mb-0"
      onClick={() => {
        updateTeam(title);
      }}
    >
      <a href={link}>
        <img src={img} alt={title} />
        <p className="text-white font-russo text-center">{title}</p>
      </a>
    </div>
  );
}

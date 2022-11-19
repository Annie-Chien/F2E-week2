const Icon = ({ src, alt, srcOnHover, active }) => {
  return (
    <img
      src={active ? srcOnHover : src}
      alt={alt}
      onMouseOver={(e) => !active && (e.currentTarget.src = srcOnHover)}
      onMouseLeave={(e) => !active && (e.currentTarget.src = src)}
    />
  );
};

export default Icon;

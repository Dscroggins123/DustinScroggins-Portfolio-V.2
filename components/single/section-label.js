const SectionLabel = ({ text = "" }) => {
  return (
    <div className="section-label">
      <h2 data-text={text}>{text}</h2>
    </div>
  );
};

export default SectionLabel;

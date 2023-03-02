export default ({ categories }: { categories: string[] }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button type="button" className="filter-btn" key={index}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

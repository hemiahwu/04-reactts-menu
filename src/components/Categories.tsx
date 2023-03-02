interface Props {
  categories: string[];
  filterItems: (c: string) => void;
}
export default ({ categories, filterItems }: Props) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => filterItems(category)}
            type="button"
            className="filter-btn"
            key={index}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

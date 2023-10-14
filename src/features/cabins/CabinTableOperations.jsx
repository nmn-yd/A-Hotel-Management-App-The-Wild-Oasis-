import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-dec", label: "Sort by Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (Low to High)" },
          { value: "regularPrice-dec", label: "Sort by Price (High to Low)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (Low to high)" },
          { value: "maxCapacity-dec", label: "Sort by Capacity (High to Low)" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;

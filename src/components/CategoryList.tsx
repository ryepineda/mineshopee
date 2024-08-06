import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryList.module.css"; // Ensure correct path to the CSS module

const CategoryList = async () => {
  const wixClient = await wixClientServer();

  const cats = await wixClient.collections.queryCollections().find();

  // Filter out the "sponsored" category and ensure item.name is defined
  const filteredCats = cats.items.filter(item => item.name && item.name.toLowerCase() !== "sponsored").slice(0, 10);

  return (
    <div id="categories" className="px-4 mt-10 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className={styles.gridContainer}>
        {filteredCats.map((item) => (
          <Link
            href={`/list?cat=${item.slug}`}
            key={item._id}
            className={styles.categoryItem}
          >
            <div className={styles.categoryImage}>
              <Image
                src={item.media?.mainMedia?.image?.url || "/cat.png"}
                alt={item.name || "Category Image"}
                fill
                sizes="20vw"
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className={styles.categoryName}>
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;

import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import he from 'he';

const PRODUCT_PER_PAGE = 8;

const SponsoredList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) => {
  if (!categoryId) {
    console.error("categoryId is required but not provided");
    return null;
  }
  const wixClient = await wixClientServer();

  const productQuery = wixClient.products
    .queryProducts()
    .startsWith("name", searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome(
      "productType",
      searchParams?.type ? [searchParams.type] : ["physical", "digital"]
    )
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    );

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort.split(" ");

    if (sortType === "asc") {
      productQuery.ascending(sortBy);
    }
    if (sortType === "desc") {
      productQuery.descending(sortBy);
    }
  }

  const res = await productQuery.find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => {
        const sponsorLink = product.additionalInfoSections?.find(
          (section: any) => section.title === "sponsorLink"
        )?.description || "";

        // Decode HTML entities
        const decodedHTML = he.decode(sponsorLink);

        const cleanHTML = DOMPurify.sanitize(decodedHTML, {
          ADD_TAGS: ['iframe'],
          ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling']
        });

        // console.log('Original sponsorLink:', sponsorLink);
        // console.log('Decoded HTML:', decodedHTML);
        // console.log('Sanitized HTML:', cleanHTML);

        return (
          <Link
            href={"/" + product.slug}
            className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
            key={product._id}
          >
            {/* <div className="relative w-full h-80">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md"
                />
              )}
            </div> */}
            {/* <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">₱{product.price?.price}</span>
            </div> */}
            {sponsorLink && (
              <div
                className="justify-start text-sm text-gray-500"
                dangerouslySetInnerHTML={{ __html: cleanHTML }}
              ></div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default SponsoredList;

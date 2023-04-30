// import {useLoaderData} from '@remix-run/react';
// import {json} from '@shopify/remix-oxygen';
// import {MediaFile} from '@shopify/hydrogen-react';
// import { useEffect } from 'react';
// import ProductOptions from '~/components/ProductOptions';
// import {Link, useLocation,useSearchParams} from '@remix-run/react';
// import tailwind from './styles/tailwind-build.css';

// export default function ProductOptions({options}) {
//   const {pathname, search} = useLocation();
//   const [currentSearchParams] = useSearchParams();

//   const searchParams = currentSearchParams;

//   return (
//     <div className="grid gap-4 mb-6">
//       {options.map((option) => {
//         if (!option.values.length) {
//           return;
//         }

//         // get the currently selected option value
//         const currentOptionVal = searchParams.get(option.name);
//         return (
//           <div
//             key={option.name}
//             className="flex flex-col flex-wrap mb-4 gap-y-2 last:mb-0"
//           >
//             <h3 className="whitespace-pre-wrap max-w-prose font-bold text-lead min-w-[4rem]">
//               {option.name}
//             </h3>

//             <div className="flex flex-wrap items-baseline gap-4">
//               {option.values.map((value) => {
//                 const linkParams = new URLSearchParams(searchParams);
//                 const isSelected = currentOptionVal === value;
//                 linkParams.set(option.name, value);
//                 return (
//                   <Link
//                     key={value}
//                     to={`${pathname}?${linkParams.toString()}`}
//                     preventScrollReset
//                     replace
//                     className={`leading-none py-1 border-b-[1.5px] cursor-pointer transition-all duration-200 ${
//                       isSelected ? 'border-gray-500' : 'border-neutral-50'
//                     }`}
//                   >
//                     {value}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }




// export async function loader({params, context, request}) {
//     const {handle} = params;
//     const searchParams = new URL(request.url).searchParams;
//     const selectedOptions = [];
  
//     // set selected options from the query string
//     searchParams.forEach((value, name) => {
//       selectedOptions.push({name, value});
//     });
  
//     const {product} = await context.storefront.query(PRODUCT_QUERY, {
//       variables: {
//         handle,
//         selectedOptions,
//       },
//     });
  
//     if (!product?.id) {
//       throw new Response(null, {status: 404});
//     }
  
//     return json({
//       product,
//     });

//     // optionally set a default variant so you always have an "orderable" product selected
//     const selectedVariant =
//     product.selectedVariant ?? product?.variants?.nodes[0];

//     return json({
//     product,
//     selectedVariant,
//     });

//   }
  

//   export default function ProductHandle() {
//     const {product, selectedVariant} = useLoaderData();
//     let klproduct = product
//     useEffect(() => {
//         var _learnq = window._learnq || [];
//         var prod = {
//             Name: klproduct.title,
//             ProductID: klproduct.id.substring(klproduct.id.lastIndexOf('/') + 1),
//             // Categories:
//             //     klproduct.collections == undefined
//             //     ? null
//             //     : klproduct.collections.edges.map((a) => a.node.title),
//             // ImageURL: product.media.nodes[0].image.url,
//             // URL: product.url,
//             // Brand: product.vendor,
//             // Price: product.selectedVariant.price.amount
//     };
//   _learnq.push(['track', 'Viewed Product', prod]);
//             });

//             console.log('this is the variant:  ' + product.selectedVariant)
//     return (
//       <section className="w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
//         <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
//           <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2">
//             <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
//             <ProductGallery media={product.media.nodes} />

//             </div>
//           </div>
//           <ProductOptions
//   options={product.options}
//   selectedVariant={selectedVariant}
// />

//           <div className="md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
//             <div className="grid gap-2">
//               <h1 className="text-4xl font-bold leading-10 whitespace-normal">
//                 {product.title}
//               </h1>
//               <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
//                 {product.vendor}
//               </span>
//             </div>
//                 <div
//                     className="prose border-t border-gray-200 pt-6 text-black text-md"
//                     dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
//                 />

//             <div
//               className="prose border-t border-gray-200 pt-6 text-black text-md"
//               dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
//             ></div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   function ProductGallery({media}) {
//     if (!media.length) {
//       return null;
//     }
  
//     const typeNameMap = {
//       MODEL_3D: 'Model3d',
//       VIDEO: 'Video',
//       IMAGE: 'MediaImage',
//       EXTERNAL_VIDEO: 'ExternalVideo',
//     };
  
//     return (
//       <div
//         className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-[90vw] md:w-full lg:col-span-2`}
//       >
//         {media.map((med, i) => {
//           let extraProps = {};
  
//           if (med.mediaContentType === 'MODEL_3D') {
//             extraProps = {
//               interactionPromptThreshold: '0',
//               ar: true,
//               loading: 'eager',
//               disableZoom: true,
//               style: {height: '100%', margin: '0 auto'},
//             };
//           }
  
//           const data = {
//             ...med,
//             __typename: typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
//             image: {
//               ...med.image,
//               altText: med.alt || 'Product image',
//             },
//           };
  
//           return (
//             <div
//               className={`${
//                 i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
//               } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}
//               key={data.id || data.image.id}
//             >
//               <MediaFile
//                 tabIndex="0"
//                 className={`w-full h-full aspect-square object-cover`}
//                 data={data}
//                 {...extraProps}
//               />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

  
  
  

//   const PRODUCT_QUERY = `#graphql
//   query product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
//     product(handle: $handle) {
//       id
//       title
//       handle
//       vendor
//       descriptionHtml
//       media(first: 10) {
//         nodes {
//           ... on MediaImage {
//             mediaContentType
//             image {
//               id
//               url
//               altText
//               width
//               height
//             }
//           }
//           ... on Model3d {
//             id
//             mediaContentType
//             sources {
//               mimeType
//               url
//             }
//           }
//         }
//       }
//       options {
//         name,
//         values
//       }
//       selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
//         id
//         availableForSale
//         selectedOptions {
//           name
//           value
//         }
//         image {
//           id
//           url
//           altText
//           width
//           height
//         }
//         price {
//           amount
//           currencyCode
//         }
//         compareAtPrice {
//           amount
//           currencyCode
//         }
//         sku
//         title
//         unitPrice {
//           amount
//           currencyCode
//         }
//         product {
//           title
//           handle
//         }
//       }
//       variants(first: 1) {
//         nodes {
//           id
//           title
//           availableForSale
//           price {
//             currencyCode
//             amount
//           }
//           compareAtPrice {
//             currencyCode
//             amount
//           }
//           selectedOptions {
//             name
//             value
//           }
//         }
//       }
//     }
//   }
// `;


import {useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';
import {MediaFile} from '@shopify/hydrogen-react';
import ProductOptions from '~/components/ProductOptions';



export async function loader({params, context, request}) {
  const {handle} = params;
  const searchParams = new URL(request.url).searchParams;
  const selectedOptions = [];

  // set selected options from the query string
  searchParams.forEach((value, name) => {
    selectedOptions.push({name, value});
  });

  const {product} = await context.storefront.query(PRODUCT_QUERY, {
    variables: {
      handle,
      selectedOptions,
    },
  });

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  return json({
    product,
  });
}


export default function ProductHandle() {
  const {product} = useLoaderData();

  return (
    <section className="w-full gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
      <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-hidden md:grid-cols-2 md:w-full lg:col-span-2">
          <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">
          <ProductGallery media={product.media.nodes} />
          </div>
        </div>
        <div className="md:sticky md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
          <div className="grid gap-2">
            <h1 className="text-4xl font-bold leading-10 whitespace-normal">
              {product.title}
            </h1>
            <span className="max-w-prose whitespace-pre-wrap inherit text-copy opacity-50 font-medium">
              {product.vendor}
            </span>
          </div>
          <ProductOptions options={product.options} />
<div
  className="prose border-t border-gray-200 pt-6 text-black text-md"
  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
/>

          <div
            className="prose border-t border-gray-200 pt-6 text-black text-md"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          ></div>
        </div>
      </div>
    </section>
  );
}

// Product Images Component
function ProductGallery({media}) {
  if (!media.length) {
    return null;
  }

  const typeNameMap = {
    MODEL_3D: 'Model3d',
    VIDEO: 'Video',
    IMAGE: 'MediaImage',
    EXTERNAL_VIDEO: 'ExternalVideo',
  };

  return (
    <div
      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-[90vw] md:w-full lg:col-span-2`}
    >
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === 'MODEL_3D') {
          extraProps = {
            interactionPromptThreshold: '0',
            ar: true,
            loading: 'eager',
            disableZoom: true,
            style: {height: '100%', margin: '0 auto'},
          };
        }

        const data = {
          ...med,
          __typename: typeNameMap[med.mediaContentType] || typeNameMap['IMAGE'],
          image: {
            ...med.image,
            altText: med.alt || 'Product image',
          },
        };

        return (
          <div
            className={`${
              i % 3 === 0 ? 'md:col-span-2' : 'md:col-span-1'
            } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}
            key={data.id || data.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={`w-full h-full aspect-square object-cover`}
              data={data}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}




const PRODUCT_QUERY = `#graphql
  query product($handle: String!, $selectedOptions: [SelectedOptionInput!]!) {
    product(handle: $handle) {
      id
      title
      handle
      vendor
      descriptionHtml
      media(first: 10) {
        nodes {
          ... on MediaImage {
            mediaContentType
            image {
              id
              url
              altText
              width
              height
            }
          }
          ... on Model3d {
            id
            mediaContentType
            sources {
              mimeType
              url
            }
          }
        }
      }
      options {
        name,
        values
      }
      selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions) {
        id
        availableForSale
        selectedOptions {
          name
          value
        }
        image {
          id
          url
          altText
          width
          height
        }
        price {
          amount
          currencyCode
        }
        compareAtPrice {
          amount
          currencyCode
        }
        sku
        title
        unitPrice {
          amount
          currencyCode
        }
        product {
          title
          handle
        }
      }
      variants(first: 1) {
        nodes {
          id
          title
          availableForSale
          price {
            currencyCode
            amount
          }
          compareAtPrice {
            currencyCode
            amount
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
`;

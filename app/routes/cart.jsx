import {Link, useLoaderData} from '@remix-run/react';
import {json} from '@shopify/remix-oxygen';

export async function action({request, context}) {
  const {session, storefront} = context;
  const headers = new Headers();

  const [formData, storedCartId, customerAccessToken] = await Promise.all([
    request.formData(),
    session.get('cartId'),
    session.get('customerAccessToken'),
  ]);

  let cartId = storedCartId;

  let status = 200;
  let result;

  // TODO form action

}

export default function Cart() {
  return (
    <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-4xl">
        Your cart is empty
      </h2>
      <Link
        to="/"
        className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none bg-black text-white w-full"
      >
        Continue shopping
      </Link>
    </div>
  );
}

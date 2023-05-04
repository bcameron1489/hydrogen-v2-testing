export function trackViewedProduct(product) {
        var _learnq = window._learnq || [];
        var item = {
            Name: product.title,
            ProductID: product.id.substring(product.id.lastIndexOf('/') + 1),
            Categories:
                product.collections == undefined
                ? null
                : product.collections.edges.map((a) => a.node.title),
            ImageURL: product.media.nodes[0].image.url,
            Handle: product.handle,
            Brand: product.vendor,
            Price: product.variants.nodes[0].price.amount
    };
    _learnq.push(['track', 'Viewed Product', item]);

  }

  export function trackAddedToCart(product) {
    var _learnq = window._learnq || []
    let item = {
            Name: product.title,
            ImageURL: product.media.nodes[0].image.url,
            Handle: product.handle,
            Price: product.variants.nodes[0].price.amount
          }
          _learnq.push(['track', 'hydrogen ATC', item])
  }


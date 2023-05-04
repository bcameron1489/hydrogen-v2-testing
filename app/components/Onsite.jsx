export function trackViewedProduct(klproduct) {

        var _learnq = window._learnq || [];
        var prod = {
            Name: klproduct.title,
            ProductID: klproduct.id.substring(klproduct.id.lastIndexOf('/') + 1),
            Categories:
                klproduct.collections == undefined
                ? null
                : klproduct.collections.edges.map((a) => a.node.title),
            ImageURL: klproduct.media.nodes[0].image.url,
            Handle: klproduct.handle,
            Brand: klproduct.vendor,
            Price: klproduct.variants.nodes[0].price.amount
    };
    _learnq.push(['track', 'Viewed Product', prod]);

  }


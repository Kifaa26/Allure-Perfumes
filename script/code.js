let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                id: 1,
                name: 'CHANEL COCO MADEMOISELLE',
                category: 'Eau de Parfum',
                description: 'Top notes: Tonka bean, White musk, and Bourbon vanilla.',
                price: 'R2580,00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/8d4e1e964b3b08b9a0c2bdfd8023ae4b.jpg?raw=true"
            },
            {
                id: 2,
                name: 'Versace Crytsal Noir',
                category: 'Eau de Parfum',
                description: 'Top notes: A combo of cardamom, pepper and ginger. Dry notes: Gardenia, Peony and Orange blossom.',
                price: 'R2520.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/c5871c569793c01632f11330dade717d.jpg?raw=true"   
            },
            {
                id: 3,
                name: 'Gucci Oud Intense Pour Homme',
                category: 'Eau de Parfum',
                description: 'Top notes: Pear, Raspberry and saffron. Heart note: Bulgarian Rose and Orange Flower infusefloral elegance and warmth. Base notes" Natural Oud Oil and Patchouli provides depth and longevity to the scent.',
                price: 'R2950.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/3e97ca77842dfee502727ebffe968f0f.jpg?raw=true"
            },
            {
                id: 4,
                name: 'Yves Saint Laurent Black Opium',
                category: 'Eau de Parfum',
                description: 'The signature black coffee accord is paired with sensual vanilla, enriched by the softness of white flowers and orange blossom, set against a base of patchouli and omforting white musk.',
                price: 'R3200.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/10646a2556e212b7958081b7bbafff8b.jpg?raw=true"
            },
            {
                id: 5,
                name: 'La Vie Est Belle',
                category: 'Eau de Parfum',
                description: 'A fragrance with a powerful trail, with a perfect balance between the nobility of Iris, the depth of Patchouli, and an alluring vanilla.',
                price: 'R3300.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/9623c8983fd75ddcc9b2cd2f76ac2000.jpg?raw=true"
            }
        ]
    ))
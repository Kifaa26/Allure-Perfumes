let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                id: 1,
                name: 'CHANEL COCO MADEMOISELLE',
                category: 'Womens',
                description: 'Top notes: Tonka bean, White musk, and Bourbon vanilla.',
                price: 'R2580,00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/8d4e1e964b3b08b9a0c2bdfd8023ae4b.jpg?raw=true"
            },
            {
                id: 2,
                name: 'VERSACE CRYSTAL NOIR',
                category: 'Womens',
                description: 'Top notes: A combo of cardamom, pepper and ginger. Dry notes: Gardenia, Peony and Orange blossom.',
                price: 'R2520.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/c5871c569793c01632f11330dade717d.jpg?raw=true"   
            },
            {
                id: 3,
                name: 'GUCCI OUD INTENSE',
                category: 'Womens',
                description: 'Top notes: Pear, Raspberry and saffron. Heart note: Bulgarian Rose and Orange Flower infusefloral elegance and warmth. Base notes" Natural Oud Oil and Patchouli provides depth and longevity to the scent.',
                price: 'R2950.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/3e97ca77842dfee502727ebffe968f0f.jpg?raw=true"
            },
            {
                id: 4,
                name: 'YVES SAINT LAURENT BLACK OPIUM',
                category: 'Womens',
                description: 'The signature black coffee accord is paired with sensual vanilla, enriched by the softness of white flowers and orange blossom, set against a base of patchouli and omforting white musk.',
                price: 'R3200.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/10646a2556e212b7958081b7bbafff8b.jpg?raw=true"
            },
            {
                id: 5,
                name: 'LANCOME LA VIE EST BELLE',
                category: 'Womens',
                description: 'A fragrance with a powerful trail, with a perfect balance between the nobility of Iris, the depth of Patchouli, and an alluring vanilla.',
                price: 'R3300.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/9623c8983fd75ddcc9b2cd2f76ac2000.jpg?raw=true"
            },
            {
            id: 6,
                name: 'DOLCE & GABANNA THE ONLY ONE',
                category: 'Womens',
                description: 'The head notes open with refined hints of bergamot, melding with pear and freesia to create a vivacious, delectable and unexpected bouqet. Heart bursts with violet accords, blending with rich coffe notes and charming Moroccan iris.',
                price: 'R3570.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/95138e0951241d6b9573fbfea0fb5bfd.jpg?raw=true"
            },
            {
                id: 7,
                name: 'ARMANI ACQUA DI GIO HOMME PROFUMO',
                category: 'Mens',
                description: 'Top notes: Peony, Musk, Pneapple, Lemon, Peach, Banana leaf and Violet. The dry down has notes of Musk, Ceder, Sandalwood, Styrax and Amber. ',
                price: 'R4992.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/1d4b400ca58b4b21b167531bc57ca4d8.jpg?raw=true"
            },
            {
                id: 8,
                name: 'BLEU DE CHANEL',
                category: 'Mens',
                description: 'Top notes: Fresh citrus accord followed by ambery cedar. Woody nots are amplified by tonka bean and vanilla for heightend sensuality.',
                price: 'R2985.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/34cbc134e196d9168c041d25455cd302.jpg?raw=true"
            },
            {
                id: 9,
                name: 'BULGARI MAN IN BLACK',
                category: 'Mens',
                description: 'Intense composition of amber, leather, spices and woods.',
                price: 'R3050.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/4cc12db09716510d02ef08e7478fe9bf.jpg?raw=true"
            },
            {
                id: 10,
                name: 'SAUVAGE DIOR',
                category: 'Mens',
                description: 'Top notes: Bergamot and lemon. Middle notes: Lavender and pepper. Base notes: Amber and patchouli.',
                price: 'R2515.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/5aea3a6cc98b09c74975b3fa87e289cc.jpg?raw=true"
            },
            {
                id: 11,
                name: 'TOM FORD NOIR DE NOIR',
                category: 'Mens',
                description: 'Rich, feminine florals collide with the masculine earthiness of black truffle, vanilla and patchouli.',
                price: 'R4800.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/990e9369772c9a47f6b2cc260475092b.jpg?raw=true"
            },
            {
                id: 12,
                name: 'L HOMME YVES SAINT LAURENT',
                category: 'Mens',
                description: 'The opening is fresh: fresh lemon zest, fresh ginger burst and a nice vetiver in the background.',
                price: 'R2200.00',
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/f690e5cbd7cd0855209af58de7a624bc.jpg?raw=true"
            }
        ]
    ))

 
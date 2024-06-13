let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : localStorage.setItem('products', JSON.stringify(
        [
            {
                id: 1,
                name: 'CHANEL COCO MADEMOISELLE',
                category: 'Womens',
                description: 'Scents: Tonka bean, White musk, and Bourbon vanilla',
                price: 2580.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/8d4e1e964b3b08b9a0c2bdfd8023ae4b.jpg?raw=true"
            },
            {
                id: 2,
                name: 'VERSACE CRYSTAL NOIR',
                category: 'Womens',
                description: 'Scents: Cardamom, Pepper and Ginger, Gardenia, Peony and Orange blossom',
                price: 2520.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/c5871c569793c01632f11330dade717d.jpg?raw=true"   
            },
            {
                id: 3,
                name: 'GUCCI OUD INTENSE',
                category: 'Womens',
                description: 'Scents: Pear, Raspberry, Saffron, Bulgarian rose, Orange Flower, Natural Oud Oil, Patchouli',
                price: 2950.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/3e97ca77842dfee502727ebffe968f0f.jpg?raw=true"
            },
            {
                id: 4,
                name: 'YVES SAINT LAURENT BLACK OPIUM',
                category: 'Womens',
                description: 'Scents: Vanilla, White flowers and Orange blossom, Patchouli, White musk',
                price: 3200.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/10646a2556e212b7958081b7bbafff8b.jpg?raw=true"
            },
            {
                id: 5,
                name: 'LANCOME LA VIE EST BELLE',
                category: 'Womens',
                description: 'Scents: Iris, Patchouli, Vanilla',
                price: 3300.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/9623c8983fd75ddcc9b2cd2f76ac2000.jpg?raw=true"
            },
            {
            id: 6,
                name: 'DOLCE & GABANNA THE ONLY ONE',
                category: 'Womens',
                description: 'Scents: Bergamot, Pear, Freesia, Rich coffee, Moroccan iris',
                price: 3570.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/ed58fb5e2eb29c77a747f74fff3bb37c.jpg?raw=true"
            },
            {
                id: 7,
                name: 'ARMANI ACQUA DI GIO HOMME PROFUMO',
                category: 'Mens',
                description: 'Scents: Peony, Musk, Pneapple, Lemon, Peach, Banana leaf, Violet, Musk, Ceder, Sandalwood, Amber ',
                price: 4992.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/1d4b400ca58b4b21b167531bc57ca4d8.jpg?raw=true"
            },
            {
                id: 8,
                name: 'BLEU DE CHANEL',
                category: 'Mens',
                description: 'Scents: Fresh citrus, Mmbery cedar, Tonka bean, Vanilla',
                price: 2985.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/34cbc134e196d9168c041d25455cd302.jpg?raw=true"
            },
            {
                id: 9,
                name: 'BULGARI MAN IN BLACK',
                category: 'Mens',
                description: 'Scents: Amber, Leather, Spices, Woods',
                price: 3050.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/7a09f098a9d92a48571f14c44b51a631.jpg?raw=true"
            },
            {
                id: 10,
                name: 'SAUVAGE DIOR',
                category: 'Mens',
                description: 'Scents: Bergamot, Lemon, Lavender, Pepper, Amber, Patchouli',
                price: 2515.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/5aea3a6cc98b09c74975b3fa87e289cc.jpg?raw=true"
            },
            {
                id: 11,
                name: 'TOM FORD NOIR DE NOIR',
                category: 'Mens',
                description: 'Scents: Black truffle, Vanilla, Patchouli',
                price: 4800.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/990e9369772c9a47f6b2cc260475092b.jpg?raw=true"
            },
            {
                id: 12,
                name: 'L HOMME YVES SAINT LAURENT',
                category: 'Mens',
                description: 'Scents: Lemon zest, Ginger, Vetiver',
                price: 2200.00,
                img_url: "https://github.com/Kifaa26/images-js/blob/main/Listing/f690e5cbd7cd0855209af58de7a624bc.jpg?raw=true"
            }
        ]
    ))

 
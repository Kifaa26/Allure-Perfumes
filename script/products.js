let container = document.querySelector('#catalogue')
let search = document.querySelector('#search')
let sorting = document.querySelector('#sort')



let products = JSON.parse(localStorage.getItem('products')) || []

let checkoutItems = localStorage.getItem('checkout') ? JSON.parse(localStorage.getItem('checkout')) : []

function displayProducts(args) {
    container.innerHTML = ""
    try {
        if (args && args.length > 0) {
            args.forEach(product => {
                container.innerHTML += `
                    <div class="card" data-category="${product.category}">
                        <img src="${product.img_url}" class="card-img-top" alt="${product.name}" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text card-description">${product.description}</p>
                            <p class="card-text">R ${product.price}</p>
                            <button type='button' class="btn btn-outline-success addToCart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" onclick='addToCart(${JSON.stringify(product)})'><span class="text-light">Add to cart</span></button>
                        </div>
                    </div>
                
                 ` 
            })
    
            document.querySelectorAll('.card-description-toggle').forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const description = this.nextElementSibling;
                    if(description.style.display === 'none' || description.style.display === '') {
                        description.style.display = 'block'
                        this.querySelector('span').textContent = '-'
    
                    }else {
                        description.style.display = 'none'
                        this.querySelector('span').textContent = '+'
                    }
                })
            })
        }else {
            container.innerHTML = `
                <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status"></div>
                    <p>No Products Found</p>
                </div>
            `;
        }
        
        

    } catch (e) {
        container.textContent = 'Please try again later'
    }
}

displayProducts(products)

// addtocart

function addToCart(product){
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('#counter').textContent =
        checkoutItems.length || 0
    }catch(e) {
        alert("Add to cart unsuccessful")
    }
}

function addToCart(product) {
    try {
        const existingItem = checkoutItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            product.quantity = 1;
            checkoutItems.push(product);
        }
        localStorage.setItem('checkout', JSON.stringify(checkoutItems));
        document.querySelector('#counter').textContent = checkoutItems.reduce((total, item) => total + item.quantity, 0);
    } catch (e) {
        alert("Add to cart unsuccessful");
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#counter').textContent = checkoutItems.length || 0

    if (document.querySelectorAll('.addToCart')) {
        document.querySelectorAll('.addToCart').forEach(button => {
            button.addEventListener('click', (event) => {
                let product = {
                    id: event.tartget.dataset.id,
                    name: event.target.dataset.name,
                    price: event.target.dataset.price,

                };
                addToCart(product)
            })
        })
    }

if (document.querySelector('#clearCartBtn')) {
    document.querySelector('#clearCartBtn').addEventListener('click',clearCart )
}

displayProducts(products)
})


search.addEventListener('keyup', (event) => {
    try {
        const searchTerm = event.target.value.trim().toLowerCase();
        if(searchTerm.length < 1) {
            displayProducts(products)
        }

        let filteredProduct = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm))

        displayProducts(filteredProduct)

        if (!filteredProduct.length === 0) {
            throw new Error(`${searchTerm} was not found`)
        }

    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
}) 

let descendingOrder = false 

function toggleSortingOrder() {
    descendingOrder = !descendingOrder
}

sorting.addEventListener('click', () => {
    try {
        if(!products) throw new Error('Please try again later')

            if(!descendingOrder) {
                products.sort((a, b) => b.price - a.price)
                sorting.textContent = 'Sort by price: lowest'
            } else {
                products.sort((a, b) => a.price - b.price)
                sorting.textContent = 'Sort by price: highest'
            }

            toggleSortingOrder()
            displayProducts(products)
            
    }catch (e) {
        container.textContent - e.message || 'We are working on this issue'
    }
})

function applyFilters() {
    let selectedCategories = []

    let checkboxes = document.querySelectorAll('.form-check-input')

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            selectedCategories.push(checkbox.value)
        }
    })

    let filteredProducts = products.filter(product => {
        return selectedCategories.length === 0 || selectedCategories.includes(product.category)
    })

    displayProducts(filteredProducts)
}


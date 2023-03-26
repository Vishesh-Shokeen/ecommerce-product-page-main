

// HAMBURGER MENU SLIDER FUNC
const iconMenu = document.querySelector('.icon-menu')
const iconClose = document.querySelector('.icon-close')
const nav = document.querySelector('nav')

iconMenu.addEventListener('click', slideNav)
iconClose.addEventListener('click', slideNav)

function slideNav() {
    nav.classList.toggle('slideNavBar')
}


//CART MODAL FUNCTION
const iconCart = document.querySelector('.cart')
const cartModal = document.querySelector('.cart-modal')

iconCart.addEventListener('click', () => {
    cartModal.classList.toggle('show')
})




//IMAGE CAROSAL 
const imagePreview = document.querySelector('.image-preview')
const arrowNext = document.querySelector('.arrow-next')
const arrowPrev = document.querySelector('.arrow-prev')
const bigimage = document.querySelector('.big-image')


//ImageNumber
let imgNumber = 1




// NEXT IMAGE ARROW FUNC
arrowNext.addEventListener('click', () => {
    if (imgNumber <= 3) {
        bigimage.src = `/images/image-product-${imgNumber + 1}.jpg`
        ++imgNumber
        arrowPrev.style.backgroundColor = 'hsl(223, 64%, 98%)'
    }
    else {
        arrowNext.style.backgroundColor = 'hsl(223, 64%, 98%,.3)'
    }
})



// PREV IMAGE ARROW FUNC
arrowPrev.addEventListener('click', () => {
    if (imgNumber >= 2) {
        bigimage.src = `/images/image-product-${imgNumber - 1}.jpg`
        --imgNumber
        arrowNext.style.backgroundColor = 'hsl(223, 64%, 98%)'
    }
    else {
        arrowPrev.style.backgroundColor = 'hsl(223, 64%, 98%,.3)'
    }
})





// PRODUCTS TO PURCHASE
const plusBtn = document.querySelector('.plusbtn')
const minusBtn = document.querySelector('.minusbtn')
const productQuantity = document.querySelector('.quantity')


// NUMBER OF PRODUCTS SELECTED
let productCount = 0



/*************/
// PLUS BUTTON FUNC
plusBtn.addEventListener('click', () => {
    productQuantity.textContent = ++productCount
})



// MINUS BUTTON FUNC
minusBtn.addEventListener('click', () => {
    if (productCount >= 1) {
        productQuantity.textContent = --productCount
    }
})
/************ */




// ADDTOCART 
const addToCart = document.querySelector('.addToCart')
const productPrice = 125.00
/************ */


// BASKET
const basketPrice = document.querySelector('.cart-basket-price')
const basketWrapper = document.querySelector('.cart-basket-product-wrapper')
const cartbasket = document.querySelector('.cart-basket')

const cartIsEmpty = document.querySelector('.emptyCart')
const total = document.querySelector('.total')

const checkout = document.querySelector('.checkout')
const deleteBasket = document.querySelector('.deleteBasket')
/************ */



//Basket CleanUp function
function cleanBasket() {
    basketWrapper.style.display = 'none'
    checkout.style.display = 'none'
    cartIsEmpty.style.display = 'block'
}


//AddItems to cart Function
addToCart.addEventListener('click', () => {

    if (productCount > 0) {
        basketPrice.textContent = `${productPrice} x ${productCount}`
        total.textContent = ` $${productPrice * productCount}`
        basketWrapper.style.display = 'flex'
        cartIsEmpty.style.display = 'none'
        checkout.style.display = 'block'

    } else { cleanBasket() }

})

//Delete Btn
deleteBasket.addEventListener('click', cleanBasket)



const wrapper = document.querySelector('.wrapper')


//   LIGHTBOX   

const lightBox = document.querySelector('.lightbox')
const imgSlider = document.querySelectorAll('.img-slider')
const lightBoxClose = document.querySelectorAll('.closeLightbox')
const mainImg = document.querySelector('.mainImg')

const lightBoxNext = document.querySelector('.lightbox-next')
const lightBoxprev = document.querySelector('.lightbox-prev')





function closeLightbox(){
    lightBox.classList.remove('open')
}




imgSlider.forEach(img =>
    img.addEventListener('click', (e) => {
        lightBox.classList.add('open')
    }))



// LightBox Next IMAGE ARROW FUNC
    lightBoxNext.addEventListener('click', () => {
        if (imgNumber <= 3) {
            mainImg.src = `/images/image-product-${imgNumber + 1}.jpg`
            ++imgNumber
            lightBoxprev.style.backgroundColor = 'hsl(223, 64%, 98%)'
        }
        else {
            lightBoxNext.style.backgroundColor = 'hsl(223, 64%, 98%,.3)'
        }
    })
    
    
    
    // LightBox PREV IMAGE ARROW FUNC
    lightBoxprev.addEventListener('click', () => {
        if (imgNumber >= 2) {
            mainImg.src = `/images/image-product-${imgNumber - 1}.jpg`
            --imgNumber
            lightBoxNext.style.backgroundColor = 'hsl(223, 64%, 98%)'
        }
        else {
            lightBoxprev.style.backgroundColor = 'hsl(223, 64%, 98%,.3)'
        }
    })
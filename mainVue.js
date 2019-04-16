Vue.component('product', {
  props: ['prodIndex'],
  template: `
   <div class="product">
        
      <div class="product-image">
        <img :src="getImage(prodIndex)" />
      </div>

      <div class="product-info">

          
          <div class="color-box"
          v-for="(variant, index) in products[prodIndex].variants" 
          :key="variant.variantId"
          :style="{ backgroundColor: variant.color }"
          @mouseover="updateProduct(index)"
          >
          
     </div>

          <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
            >
          Add to cart
          </button>

       </div> 

    
    </div>
   `,
  data() {
    return {
      products: [
        {
          brand: 'Vincero',
          model: 'Chrono S',
          selectedVariant: 0,  

          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/img/Chrono-S-Blue_Brown.jpg',
              variantQuantity: 10
            },
            {
              variantId: 2,
              color: 'black',
              variantImage: './assets/img/Chrono-S-Matte-Black.jpg',
              variantQuantity: 10
            },
            {
              variantId: 3,
              color: 'gold',
              variantImage: './assets/img/Chrono-S-Black_Silver.jpg',
              variantQuantity: 10
            },
            {
              variantId: 4,
              color: 'gold',
              variantImage: './assets/img/Chrono-S-Rose-Gold.jpg',
              variantQuantity: 10
            }
          ]
        },
        {
          brand: 'Vincero',
          model: 'Kairos',
          selectedVariant: 0,
          variants: [
            {
              variantId: 1,
              color: 'blue',
              variantImage: './assets/img/Kairos-Black_Gold-Mesh.jpg',
              variantQuantity: 10
            },
            {
              variantId: 2,
              color: 'black',
              variantImage: './assets/img/Kairos-Matte-Black-Mesh.jpg',
              variantQuantity: 10
            },
            {
              variantId: 3,
              color: 'black',
              variantImage: './assets/img/Kairos-Blue_Brown.jpg',
              variantQuantity: 10
            },
            {
              variantId: 4,
              color: 'black',
              variantImage: './assets/img/Kairos-White_Silver.jpg',
              variantQuantity: 10
            },
          ]
        },
        {
        brand: 'Vincero',
        model: 'Bellwether',
        selectedVariant: 0,
        variants: [
        {
          variantId: 1,
          color: 'green',
          variantImage: './assets/img/Bellwether-Rose-Gold_Blue.jpg',
          variantQuantity: 10    
        },
        {
          variantId: 2,
          color: 'blue',
          variantImage: './assets/img/Bellwether-Rose-Gold_Black.jpg',
          variantQuantity: 10    
        },
        {
          variantId: 3,
          color: 'blue',
          variantImage: './assets/img/Bellwether-Silver_White.jpg',
          variantQuantity: 10    
        },
        {
          variantId: 4,
          color: 'blue',
          variantImage: './assets/img/Bellwether-Matte-Black.jpg',
          variantQuantity: 10    
        }
      ]
        },
        {
          brand: 'Breguet',
          model: 'Classique',
          selectedVariant: 0,
          variants: [
          {
            variantId: 1,
            color: 'darkblue',
            variantImage: './assets/img/Breguet-Classique-Granite.jpg',
            variantQuantity: 10    
          },
          {
            variantId: 2,
            color: 'black',
            variantImage: './assets/img/Breguet-Classique-Black.jpg',
            variantQuantity: 10    
          },
          {
            variantId: 3,
            color: 'gold',
            variantImage: './assets/img/Breguet-Classique-Gold.jpg',
            variantQuantity: 10    
          }
        ]
        },
        {
          brand: 'Breguet',
          model: 'Marine',
          selectedVariant: 0,
          variants: [
          {
            variantId: 1,
            color: 'salmon',
            variantImage: './assets/img/Breguet-Marine-Black_Copper.jpg',
            variantQuantity: 10    
          },
          {
            variantId: 2,
            color: 'black',
            variantImage: './assets/img/Breguet-Marine-Black.jpg',
            variantQuantity: 10    
          },
          {
            variantId: 3,
            color: 'blue',
            variantImage: './assets/img/Breguet-Marine-Blue.jpg',
            variantQuantity: 10    
          }
        ]
        },
        {
          brand: 'Breguet',
          model: 'Heritage',
          selectedVariant: 0,
          variants: [
          {
            variantId: 1,
            color: 'green',
            variantImage: './assets/img/Breguet-Heritage-Silver.jpg',
            variantQuantity: 10    
          },
          {
            variantId: 2,
            color: 'blue',
            variantImage: './assets/img/Breguet-Heritage-Copper.jpg',
            variantQuantity: 10    
          }
        ]
        }
      ],
      brand: 'Vue Mastery',
        selectedVariant: 0,
      
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [
        {
          variantId: 2234,
          color: 'green',
          variantImage: './assets/img/Chrono-S-Matte-Black.jpg',
          variantQuantity: 10    
        },
        {
          variantId: 2235,
          color: 'blue',
          variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
          variantQuantity: 10    
        }
      ],
      
    }
  },
    methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
      },
      updateProduct(index) {  
          this.selectedVariant = index
      },
      addReview(productReview) {
        this.reviews.push(productReview)
      },
      getImage(prodIndex){
        console.log(prodIndex)
        return this.products[prodIndex].variants[this.selectedVariant].variantImage
      }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product  
        },
        
        inStock(prodIndex){
            return this.products[0].variants[this.selectedVariant].variantQuantity
        },
        shipping() {
          if (this.premium) {
            return "Free"
          }
            return 2.99
        }
    }
})

var app = new Vue({
el: '#app',
data: {
  premium: true,
  cart: []
},
methods: {
  updateCart(id) {
      this.cart.push(id)
  },
  removeItem(id) {
      for(var i = this.cart.length - 1; i >= 0; i--) {
          if(this.cart[i] === id) {
              this.cart.splice(i, 1);
          }
      }
  }
}

})
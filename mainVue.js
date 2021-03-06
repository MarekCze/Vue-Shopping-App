Vue.component('product', {
  props: ['prodIndex'],
  template: `
   <div class="product">
      <div class="product-name">
        <h1>{{products[prodIndex].model}}</h1>
      </div>  
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

          <button v-on:click="addToCart(prodIndex)" 
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
          model: 'CHRONO S-CLASS',
          productId: 0,
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
          model: 'KAIROS SERIES',
          productId: 1,
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
        model: 'BELLWETHER',
        productId: 2,
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
          model: 'CLASSIQUE',
          productId: 3,
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
          model: 'MARINE',
          productId: 4,
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
          model: 'HERITAGE',
          productId: 5,
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
      addToCart(prodIndex) {
          this.$emit('add-to-cart', this.products[prodIndex].productId, this.products[prodIndex].variants[this.selectedVariant].variantId)
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



Vue.component('productDetails', {
  props: ['prodIndex'],
  template: `
    <div class="productDetails">
      <div class="product-name">
        <h1>{{products[prodIndex].model}}</h1>
      </div>  
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
      <div class="price">
      <p>{{products[prodIndex].price}}</p>
      </div>
      <div class="description">
        <p>{{products[prodIndex].description}}</p>
      </div>

      <button v-on:click="addToCart(prodIndex)" 
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
          model: 'CHRONO S-CLASS',
          description: 'Crafted to make a statement, the S Class is for the modern gentleman who is bold, daring, and pioneering.',
          price: '$189',
          productId: 0,
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
          model: 'KAIROS SERIES',
          description: 'Sleek enough to wear to work and rebellious enough to match your hustle, The Kairos will quickly become your go to timepiece.',
          price: '$159',
          productId: 1,
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
        model: 'BELLWETHER',
        description: 'Designed to impress even the toughest critics, the Bellwether is the epitome of sophistication. No matter your plans, make a statement at every occasion.',
        price: '$229',
        productId: 2,
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
          model: 'CLASSIQUE',
          description: 'The Classique wristwatches exemplify the watchmaking ideals of precision, clarity and elegant lines.',
          price: '$19000',
          productId: 3,
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
          model: 'MARINE',
          description: 'Marine watches are based on the traditional Breguet values, while interpreting them in a contemporary way in order to create sporty timepieces.',
          price: '$21000',
          productId: 4,
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
          model: 'HERITAGE',
          description: 'A Breguet watch does not need its conventional round case to be recognised for what it is. The Heritage models show that even in a curved tonneau case, a Breguet remains unmistakably a Breguet.',
          price: '$26000',
          productId: 5,
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
      addToCart(prodIndex) {
        var item = {prodId:this.products[prodIndex], variantId:this.products[prodIndex].variants[this.selectedVariant].variantId}
        console.log(item)
          this.$emit('add-to-cart', item)
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

  Vue.component('shoppingCart', {
    template: `
      <div class="cartContainer">
        <ul>
          <li v-for="item in items">{{item}}</li>
        </ul>
      </div>
    `,
    data() {
      return {
        items: getStorage()
      }
    }
  })
  

Vue.config.devtools = true
var app = new Vue({
el: '#app',
data: {
  premium: true,
  cart: []
},
methods: {
  updateCart(item) {
      this.cart.push(item)
      localStorage.setItem("items", JSON.stringify(this.cart))
      var ans = JSON.parse(localStorage.getItem("items"))
      console.log(ans)
  },  
  getStorage(){
    var storage = JSON.parse(localStorage.getItem("items"));
    return storage;
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
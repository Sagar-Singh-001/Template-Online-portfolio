//Add a new boolean data property `onSale` and create a computed property that takes `brand`, `product` and `onSale` and prints out a string whenever `onSale` is true.

var app = new Vue({
    el: '#app',
    data: {
        // product: 'Socks',
        // brand: 'Vue Mastery',
        // selectedVariant: 0,
        // details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        image:'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
        // image:"https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg" ,
        variants: [
          {
            variantId: 2234,
            variantColor: 'green',
            variantImage:  'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
            variantQuantity: 10     
          },
          {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg',
            variantQuantity: 0     
          }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateimage: function(image) {  
            this.selectedVariant = image
            console.log(image)
        }
    },
    computed: {
        // title() {
        //     return this.brand + ' ' + this.product  
        // },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        // inStock(){
        //     return this.variants[this.selectedVariant].variantQuantity
        // }
    }
  })
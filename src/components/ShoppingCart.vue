<template>
  <div class="shopping-cart">
    <h2>Produtos Disponíveis</h2>
    <ul>
      <li v-for="product in inventory" :key="product.id">
        {{ product.name }} - R$ {{ product.price }}
        <button @click="addProduct(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>

    <hr />
    <h3>Resumo do Carrinho</h3>
    <p>Itens no carrinho: <strong>{{ cartCount }}</strong></p>
  </div>
</template>

<script>
export default {
  computed: {
    inventory() {
      return this.$store.state.inventory;
    },
    cartCount() {
      return this.$store.getters.cartItemCount;
    }
  },
  methods: {
    addProduct(product) {
      this.$store.dispatch('addToCart', product);
    }
  }
}
</script>

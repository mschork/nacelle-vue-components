import axios from 'axios'
import { transformProduct } from '@nacelle/nacelle-tools'

const search = {
  namespaced: true,
  state: {
    query: null,
    autocompleteVisible: false,
    filtersCleared: false,
    searchData: {},
    loadedData: false,
    searchLoading: false
  },
  getters: {
    queryOrigin(state) {
      if (
        state.query &&
        state.query.origin
      ) {
        return state.query.origin
      }

      return undefined
    },
    hasProductData(state) {
      return (
        state.searchData &&
        state.searchData.products &&
        state.searchData.products.length > 0
      )
    },
    productData (state) {
      if (
        state.searchData &&
        state.searchData.products &&
        state.searchData.products.length > 0
      ) {
        return state.searchData.products
      }

      return []
    }
  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
  
    setAutocompleteVisible(state) {
      state.autocompleteVisible = true
    },

    setAutocompleteNotVisible(state) {
      state.autocompleteVisible = false
    },

    setFiltersCleared(state) {
      state.filtersCleared = true
    },

    setFiltersNotCleared(state) {
      state.filtersCleared = false
    },

    setSearchData(state, data) {
      state.searchData = {
        ...state.searchData,
        ...data
      }
    },

    dataHasLoaded(state) {
      state.loadedData = true
    },

    dataNotLoaded(state) {
      state.loadedData = false
    },

    isSearching(state) {
      state.searchLoading = true
    },

    isNotSearching(state) {
      state.searchLoading = false
    }
  },

  actions: {
    getProductData({ commit, getters }) {
      if (!getters.hasProductData) {
        commit('dataNotLoaded')
        commit('isSearching')
        
        axios('/data/shop/static.json')
          .then(res => {
            if (
              res &&
              res.data &&
              res.data.products
            ) {
              commit('dataHasLoaded')
              commit('isNotSearching') 

              const products = res.data.products
                .filter(product => {
                  return (
                    product &&
                    product.node &&
                    product.node.title &&
                    product.node.variants
                  )
                })
                .map(product => {
                  return transformProduct(product.node)
                })
              
              commit('setSearchData', { products })
            }
          })
      }
    }
  }
}

export default search
<script setup>
import { imagesFolder } from '../../models/paths';

</script>

<script>
export default {
    props: { showModalDialog: Boolean, imagePath: String },
    watch: {
        showModalDialog(newValue, oldValue) {
            this.showModal = this.showModalDialog
        }
    },
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            showModal: false,
        };
    }, methods:{
        closeModal(){
            this.showModal = false
        }
    }
};
</script>

<template>
    <div>
        <!-- <button @click="showModal = true">Show Image</button> -->
        <div v-if="showModal" class="modal">
            <span class="close" @click="closeModal()">x</span>
            <img :src="`${publicPath}./assets/${imagesFolder}/${imagePath}`" :alt="`Image text`">
        </div>
    </div>
</template>
  
<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.9);
}

.modal img {
  margin: auto;
  display: block;
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
}

.close {
  color: #fff;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
  
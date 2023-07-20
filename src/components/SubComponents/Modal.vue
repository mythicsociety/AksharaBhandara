<template>
    <div class="modal" v-if="showModal">
        <button class="modal-close-button" @click="closeModal">X</button>
        <div class="modal-content">
            <!-- Modal content here -->
            <slot></slot>
        </div>
        <!-- <div class="modal-footer">
            <button @click="closeModal">Close Modal</button>
        </div> -->
    </div>
</template>
  
<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>
  
<style>
/* Styles for the modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Center the modal content horizontally */
    justify-content: center;
    /* Center the modal content vertically */
    padding: 20px;
    z-index: 9999;
    /* Set a high z-index to ensure the modal is on top */
}

.modal-close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    z-index: 10000;
    /* Set an even higher z-index to ensure the close button is on top of the modal */
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    flex: 1;
    /* Expand to take available space */
    overflow-y: auto;
    /* Enable scrolling if content overflows */
}

.modal-footer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>
  
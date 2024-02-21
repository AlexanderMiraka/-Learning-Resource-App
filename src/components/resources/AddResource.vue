<template>
  <base-card>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="titleInput" />
        </div>
        <div class="form-control">
            <label for="description">description</label>
            <input id="description" name="description" rows="3"  ref="descriptionInput"/>
        </div>
        <div class="form-control">
            <label for="link">Title</label>
            <input id="link" name="link" type="url" ref="urlInput"/>
        </div>
        <div class="">
            <base-button :type="submit">Add resources</base-button>
        </div>
    </form>
  </base-card>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: {
    BaseCard,
    BaseButton
  },
  inject: ['addResource'],
  methods: {
    submitData () {
        const enteredTitle = this.$refs.titleInput.value;
        const enteredDescription = this.$refs.descriptionInput.value;
        const enteredURL = this.$refs.urlInput.value;

        this.addResource(enteredTitle,enteredDescription,enteredURL);
    }
  }
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>

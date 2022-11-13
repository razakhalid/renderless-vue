<template>
  <div>
<!--    <form-helper>-->
<!--      <template #form-header>-->
<!--        <h1>Form Header</h1>-->
<!--        <p>Information about the form</p>-->
<!--      </template>-->
<!--      <template #form-fields>-->
<!--        <input type="text" placeholder="name" />-->
<!--        <input type="text" placeholder="password" />-->
<!--      </template>-->
<!--      <template #form-controls>-->
<!--        <button @click="handleSubmit">Submit</button>-->
<!--      </template>-->
<!--    </form-helper>  -->

    <renderless-password
        :password="password"
        :confirmation="confirmation"
        v-slot="{
          matching,
          complexity,
          isValid
        }">
      <div class="wrapper">
        <div class="field">
          <label for="password">Password</label>
          <input type="text" id="password" v-model="password" />
        </div>
        <div class="field">
          <label for="confirmation">Confirmation</label>
          <input type="text" id="confirmation" v-model="confirmation" />
        </div>
        <div class="complexity-field">
          <div :class="['complexity', complexityStyle(complexity)]">
          </div>
        </div>
        <div class="field">
          <button :disabled="!isValid">Submit</button>
        </div>
      </div>
      <p>Matches: {{ matching }}</p>
      <p>Complexity: {{ complexity }}</p>
      <p>Is Valid: {{ isValid }}</p>
    </renderless-password>
  </div>

</template>

<script>
import RenderlessPassword from './components/renderless-password';
import FormHelper from "@/components/FormHelper";

export default {
  name: 'App',
  data() {
    return {
      password: '',
      confirmation: ''
    }
  },
  methods: {
    complexityStyle(complexity) {
      if (complexity >= 3) {
        return 'high'
      }
      if (complexity >= 2) {
        return 'mid';
      }
      if (complexity >= 1) {
        return 'low'
      }
    }
  },
  components: {
    FormHelper,
    RenderlessPassword
  }
}
</script>

<style>
.complexity { transition: 0.2s; height: 10px;
}
.high {
  width: 100%; background: lime;
}
.mid {
  width: 66%; background: yellow;
}
.low {
  width: 33%; background: red;
}
</style>
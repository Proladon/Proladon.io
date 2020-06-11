<template>
  <div class="charStrength">
      <pre>{{barcket}}{{strength}}{{barcket}}</pre>
  </div>
</template>

<script>
export default {
    name: 'CharStrength',
    props:[
        'length',
        'barcket',
        'char',
        'value',
    ],
    data(){
        return{
            strength: String
        }
    },
    mounted(){
        const percent = this.value / this.length
        const value = this.length * percent
        const space = this.length - value
        console.log('value', value)
        console.log('space', space)
        this.strength = this.char.repeat(this.value) + '  '.repeat(space)
    }
}

</script>   

<style>

</style>


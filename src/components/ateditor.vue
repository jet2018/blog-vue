<template>
<div>
    <Editor v-model="value" formats="inline" editorStyle="height: 320px" />
	
</div>
</template>
<script>
import Editor from 'primevue/editor';
export default {
    components:{Editor},
    name: "atEditor"
}
</script>
import { ref, watch } from "vue";

export default () => {
  const count = ref(0)
  const a = ref(0)
  const b = ref(0)
  const history = ref([]);

  const increment = () => count.value++

  watch([a,b],([newA, newB],[oldA,oldB]) => {
    if(newA !== oldA) {
      history.value.push(`a: ${oldA} -> ${newA}`)
    }

    if(newB !== oldB) {
      history.value.push(`b: ${oldB} -> ${newB}`)
    }
  });

  return {
    count,
    a,
    b,
    increment,
    history
  }
}
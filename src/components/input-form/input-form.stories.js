import InputForm from './input-form';

export default {
    title: 'input-form',
    component: InputForm
}

export const FormInput = (args, {argTypes}) => ({
    components: {InputForm},
    props: Object.keys(argTypes),
    data() {
        return {
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputLinearValue1: '',
            inputLinearValue2: '',
            inputLinearValue3: ''
        }
    },
    template: `
      <div style="margin-top: 20px; display: flex">
          <div style="margin-right: 80px; min-width: 310px">
            <input-form v-model="inputValue1" style="margin-bottom: 15px;"/>
            <input-form v-model="inputValue2" is-correct style="margin-bottom: 15px;"/>
            <input-form v-model="inputValue3" error-msg="Error message" style="margin-bottom: 15px;"/>
            <input-form is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
          <div style="min-width: 310px">
            <input-form v-model="inputLinearValue1" is-linear style="margin: 20px 0 25px;"/>
            <input-form v-model="inputLinearValue2" is-linear is-correct style="margin-bottom: 25px;"/>
            <input-form v-model="inputLinearValue3" is-linear error-msg="Error message" style="margin-bottom: 25px;"/>
            <input-form is-linear is-disabled label-name="Disabled" style="margin-bottom: 15px;"/>
          </div>
      </div>`
})
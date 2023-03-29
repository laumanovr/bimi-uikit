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
            inputSmallValue: '',
            inputValue1: '',
            inputValue2: '',
            inputValue3: '',
            inputDisabledValue: 'Disabled',
            inputLinearValue1: '',
            inputLinearValue2: '',
            inputLinearValue3: ''
        }
    },
    template: `
      <div style="margin-top: 20px; display: flex">
          <div style="margin-right: 80px; min-width: 310px">
            <input-form v-model="inputSmallValue" hint-msg="Helper text" small-label label-name="Small Label" style="margin-bottom: 25px;"/>
            <input-form v-model="inputValue1" hint-msg="Helper text" style="margin-bottom: 25px;"/>
            <input-form v-model="inputValue2" hint-msg="Helper text" is-correct style="margin-bottom: 25px;"/>
            <input-form v-model="inputValue3" error-msg="Error message" style="margin-bottom: 25px;"/>
            <input-form v-model="inputDisabledValue" is-disabled label-name="Disabled" style="margin-bottom: 25px;"/>
          </div>
          <div style="min-width: 310px">
            <input-form v-model="inputLinearValue1" hint-msg="Helper text" is-linear style="margin: 20px 0 25px;"/>
            <input-form v-model="inputLinearValue2" hint-msg="Helper text" is-linear is-correct style="margin-bottom: 25px;"/>
            <input-form v-model="inputLinearValue3" is-linear error-msg="Error message" style="margin-bottom: 25px;"/>
            <input-form is-linear is-disabled label-name="Disabled" style="margin-bottom: 25px;"/>
          </div>
      </div>`
})
export default {
  title: "Typography",
};

const Template = () => ({
  template: `
  <div>
    <div style="margin-bottom: 100px;">
      <div style="margin-bottom: 15px;" class="h1">Headline Extra Large</div>
      <div style="margin-bottom: 15px;" class="h2">Headline Large</div>
      <div style="margin-bottom: 15px;" class="h3">Headline Medium</div>
      <div style="margin-bottom: 15px;" class="h4">Headline Small</div>
      <div class="h5">Headline Extra Small</div>
    </div>

    <div style="margin-bottom: 100px;">
      <div style="margin-bottom: 15px;" class="title-xl">Title Extra Large</div>
      <div style="margin-bottom: 15px;" class="title-l">Title Large</div>
      <div style="margin-bottom: 15px;" class="title-m">Title Medium</div>
      <div style="margin-bottom: 15px;" class="title-s">Title Small</div>
      <div class="title-xs">Title Extra Small</div>
    </div>

    <div style="margin-bottom: 100px;">
      <div style="margin-bottom: 15px;" class="label-l">Label Large</div>
      <div style="margin-bottom: 15px;" class="label-xl">Label Extra Large</div>
      <div style="margin-bottom: 15px;" class="label-m">Label Medium</div>
      <div style="margin-bottom: 15px;" class="label-xm">Label Medium</div>
      <div style="margin-bottom: 15px;" class="label-s">Label Small</div>
      <div style="margin-bottom: 15px;" class="label-xs">Label Extra Small</div>
      <div style="margin-bottom: 15px;" class="label-micro">Label Micro</div>
      <div class="label-xmicro">Label Extra Micro</div>
    </div>

    <div style="margin-bottom: 100px;">
      <div style="margin-bottom: 15px;" class="body-xl">Body Extra Large</div>
      <div style="margin-bottom: 15px;" class="body-l">Body Large</div>
      <div style="margin-bottom: 15px;" class="body-m">Body Medium</div>
      <div style="margin-bottom: 15px;" class="body-s">Body Small</div>
      <div class="body-xs">Body Extra Small</div>
    </div>

    <div>
      <div style="margin-bottom: 15px;" class="numbers-l">1234567890</div>
      <div style="margin-bottom: 15px;" class="numbers-m">1234567890</div>
      <div style="margin-bottom: 15px;" class="numbers-s">1234567890</div>
      <div class="numbers-micro">1234567890</div>
    </div>
  </div>`,
});

export const Component = Template.bind({});

export default {
  props: [{
    name: 'icon',
    type: 'String',
    default: '',
    desc: 'props.icon'
  }, {
    name: 'iconClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.iconClass'
  }, {
    name: 'label',
    type: 'String',
    default: '',
    desc: 'props.label'
  }, {
    name: 'labelPosition',
    type: 'String',
    default: '',
    desc: 'props.labelPosition'
  }, {
    name: 'labelClass',
    type: 'String,Object,Array',
    default: '',
    desc: 'props.labelClass'
  }, {
    name: 'primary',
    type: 'Boolean',
    default: 'false',
    desc: 'props.primary'
  }, {
    name: 'secondary',
    type: 'Boolean',
    default: 'false',
    desc: 'props.secondary'
  }, {
    name: 'disabled',
    type: 'Boolean',
    default: 'false',
    desc: 'props.disabled'
  }, {
    name: 'type',
    type: 'String',
    default: '',
    desc: 'props.type'
  }, {
    name: 'href',
    type: 'String',
    default: '',
    desc: 'props.href'
  }, {
    name: 'router',
    type: 'String,Object',
    default: '',
    desc: 'props.router'
  }, {
    name: 'target',
    type: 'String',
    default: '',
    desc: 'props.target'
  }, {
    name: 'backgroundColor',
    type: 'String',
    default: '',
    desc: 'props.backgroundColor'
  }, {
    name: 'color',
    type: 'String',
    default: '',
    desc: 'props.color'
  }, {
    name: 'hoverColor',
    type: 'String',
    default: '',
    desc: 'props.hoverColor'
  }, {
    name: 'rippleColor',
    type: 'String',
    default: '',
    desc: 'props.rippleColor'
  }, {
    name: 'rippleOpacity',
    type: 'Number',
    default: '',
    desc: 'props.rippleOpacity'
  }],
  slots: [{
    name: 'default',
    desc: 'slots.default'
  }],
  events: [{
    name: 'click',
    desc: 'events.click'
  }, {
    name: 'hover',
    desc: 'events.hover'
  }, {
    name: 'hoverExit',
    desc: 'events.hoverExit'
  }, {
    name: 'keyboardFocus',
    desc: 'events.keyboardFocus'
  }]
}

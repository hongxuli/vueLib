import Task from './Task.vue';


export default {
  component: Task,
  title: 'Task',
  argTypes:{

  }
}


const Template = args => ({
  components: {Task},
  setup(){
    return {args}
  },
  template: '<Task v-bind="args" />'
})


export const Default = Template.bind({})
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};


export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

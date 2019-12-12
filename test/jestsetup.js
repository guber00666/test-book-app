import { shallow, render, mount, configure } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.configure = configure;

console.error = message => {
    throw new Error(message);
};
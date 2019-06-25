import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NewThread from '../../components/newthread/newthread';
configure({ adapter: new Adapter() });

describe("<FormDialog />", () => {
  
    it("if model is there, then FormInput is rendered depending on number of input elements", () => {
      const wrapper = mount(<NewThread />);
      expect(wrapper.find(NewThread)).toHaveLength(1);
      wrapper.unmount(<NewThread />);
    });
  
  })
  
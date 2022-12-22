import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Plans from '../Plans.vue'

describe('Plans', () => {
    it('renders properly', () => {
        const wrapper = mount(Plans)
        expect(wrapper.text()).toContain('Select your plan')
    })
})
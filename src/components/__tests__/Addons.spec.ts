import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Addons from '../Addons.vue'

describe('Addons', () => {
    it('renders properly', () => {
        const wrapper = mount(Addons)
        expect(wrapper.text()).toContain('Pick add-ons')
    })
})
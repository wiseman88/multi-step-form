import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Confirmation from '../Confirmation.vue'

describe('Confirmation', () => {
    it('renders properly', () => {
        const wrapper = mount(Confirmation)
        expect(wrapper.text()).toContain('Thank you')
    })
})
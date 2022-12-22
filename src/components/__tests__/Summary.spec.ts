import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Summary from '../Summary.vue'

describe('Summary', () => {
    it('renders properly', () => {
        const wrapper = mount(Summary)
        expect(wrapper.text()).toContain('Finishing up')
    })
})
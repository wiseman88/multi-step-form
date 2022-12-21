import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Personal from '../Personal.vue'

describe('Personal', () => {
    it('renders properly', () => {
        const wrapper = mount(Personal)
        expect(wrapper.text()).toContain('Personal info')
    })
})
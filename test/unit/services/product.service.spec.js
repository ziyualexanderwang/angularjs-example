/* global describe, beforeEach, expect, it, inject */

'use strict';

describe('service', function() {
  // load modules
  beforeEach(module('app'));
  beforeEach(module('appServices'));

  // Test service availability
  it('check the existence of Product factory', inject(function(productService) {
    expect(productService).toBeDefined();
  }));
});

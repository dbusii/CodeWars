Test.assertEquals(anyArrows([]), false, "Should handle empty quiver");
Test.assertEquals(anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}]), true, "Should handle quiver with undamaged arrows");
Test.assertEquals(anyArrows([{range: 10, damaged: true}, {damaged: true}]), false, "Should handle quiver with damaged arrows");
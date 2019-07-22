Test.describe("Basic", function(){
  Test.assertEquals(scramble('abcd', [0,3,1,2]), 'acdb', "Should return acdb");
  Test.assertEquals(scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1", "Should return c0s3s1");
  Test.assertEquals(scramble('bskl5', [2,1,4,3,0]), "5sblk", "Should return 5sblk");
});
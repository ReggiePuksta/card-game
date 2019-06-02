var TemplateStorage = require('../src/js/template_storage.js');

describe('TemplateStorage', function() {
  var templateStorage;
  beforeEach(function() {
    templateStorage = new TemplateStorage();
  });
  
 it('should retrieve templateList', function() {
   templateStorage.loadAllAjax();
   console.log(templateStorage);
 });
  
});


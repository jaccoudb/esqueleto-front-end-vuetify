<template>
  <div class="hello">
    <div>
      {{ excelData }}
      <input
        type="file"
        placeholder="Upload file"
        @change="excelExport"
        accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      />
    </div>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
export default {
  data() {
    return {
      excelData: [],
    };
  },
  methods: {
    excelExport(event) {
      var input = event.target;
      var reader = new FileReader();
      reader.onload = () => {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        wb.SheetNames.forEach((sheetName) => {
          var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
          this.excelData = JSON.stringify(rowObj);
        });
      };
      reader.readAsBinaryString(input.files[0]);
      console.log(input);
    },
  },
};
</script>

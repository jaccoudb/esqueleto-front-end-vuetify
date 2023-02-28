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
    <v-data-table
      :headers="headers"
      :items="excelData"
      :items-per-page="5"
      calculate-widths
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import * as XLSX from 'xlsx';
export default {
  data() {
    return {
      excelData: [],
      headers: [
        {
          text: 'PN',
          align: 'start',
          sortable: false,
          value: 'PN',
          width: '15%',
        },
        { text: 'DESCRICAO', value: 'DESCRICAO', width: '40%' },
        { text: 'ND', value: 'ND', width: '10%' },
        { text: 'UNIDADE_MEDIDA', value: 'UNIDADE_MEDIDA', width: '5%' },
        { text: 'QUANTIDADE', value: 'QUANTIDADE', width: '5%' },
        { text: 'OBSERVACAO', value: 'OBSERVACAO', width: '25%' },
      ],
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
          this.excelData = rowObj;
        });
      };
      reader.readAsBinaryString(input.files[0]);
      console.log(input);
    },
  },
};
</script>

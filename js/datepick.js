      jQuery('#datePick').datetimepicker({
        timepicker:false,
        format:'d.m.Y',
        minDate:'0'
      });
      jQuery('#timePick').datetimepicker({
        datepicker:false,
        format:'H:i',
        minTime: '09:30',
        maxTime: '23:00',
        step: 30
      });

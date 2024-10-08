<?php
date_default_timezone_set('UTC'); // Set the default timezone to UTC

// Array of timezones to display
$timezones = [
    'America/New_York',
    'Europe/London',
    'Asia/Tokyo',
    'Australia/Sydney',
    'Africa/Johannesburg',
    'America/Los_Angeles',
    'Asia/Kolkata' // Added India timezone
];
?>
<!DOCTYPE html>
<html>
<head>
    <title>Current Times in Different Timezones</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            padding: 10px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

<h1>Current Times in Different Timezones</h1>
<table>
    <thead>
        <tr>
            <th>Timezone</th>
            <th>Current Time</th>
        </tr>
    </thead>
    <tbody>
        <?php
        foreach ($timezones as $timezone) {
            $date = new DateTime('now', new DateTimeZone($timezone));
            echo "<tr>";
            echo "<td>{$timezone}</td>";
            echo "<td>" . $date->format('Y-m-d H:i:s') . "</td>";
            echo "</tr>";
        }
        ?>
    </tbody>
</table>

</body>
</html>

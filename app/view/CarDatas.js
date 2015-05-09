/*
 * File: app/view/CarDatas.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('CarListings.view.CarDatas', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.cardatas',

    requires: [
        'CarListings.view.CarDatasViewModel',
        'CarListings.view.CarDatasViewController',
        'Ext.grid.Panel',
        'Ext.grid.column.Column',
        'Ext.form.field.Display',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.button.Button',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'cardatas',
    viewModel: {
        type: 'cardatas'
    },
    height: 250,
    shrinkWrap: 0,
    width: 400,
    layout: 'border',
    collapsed: false,
    title: 'My Panel',

    items: [
        {
            xtype: 'gridpanel',
            flex: 1,
            region: 'center',
            split: true,
            reference: 'list',
            resizable: false,
            title: '',
            forceFit: true,
            bind: {
                store: '{carDatas}'
            },
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'manufacturer',
                    text: 'Manufacturer'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'model',
                    text: 'Model'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'price',
                    text: 'Price'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'wiki',
                    text: 'Wiki'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'img',
                    text: 'Img'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'quality',
                    text: 'Quality'
                }
            ],
            listeners: {
                select: 'select'
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            region: 'east',
            split: true,
            reference: 'display',
            width: 150,
            layout: 'card',
            bodyBorder: true,
            items: [
                {
                    xtype: 'panel',
                    reference: 'selectMessage',
                    layout: {
                        type: 'vbox',
                        align: 'center',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'container',
                            flex: 1,
                            html: '<h1>Please select a record</h1>'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    reference: 'details',
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Manufacturer',
                            bind: {
                                value: '{record.manufacturer}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Model',
                            bind: {
                                value: '{record.model}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Price',
                            bind: {
                                value: '{record.price}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Wiki',
                            bind: {
                                value: '{record.wiki}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Img',
                            bind: {
                                value: '{record.img}'
                            }
                        },
                        {
                            xtype: 'displayfield',
                            fieldLabel: 'Quality',
                            bind: {
                                value: '{record.quality}'
                            }
                        }
                    ]
                },
                {
                    xtype: 'form',
                    reference: 'form',
                    bodyPadding: 10,
                    title: 'Edit CarData',
                    items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Manufacturer',
                            name: 'manufacturer'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Model',
                            name: 'model'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Price',
                            name: 'price'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Wiki',
                            name: 'wiki'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Img',
                            name: 'img'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Quality',
                            name: 'quality'
                        },
                        {
                            xtype: 'container',
                            padding: 10,
                            layout: {
                                type: 'hbox',
                                align: 'middle',
                                pack: 'center'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    formBind: true,
                                    itemId: 'saveButton',
                                    margin: 5,
                                    text: 'Save',
                                    listeners: {
                                        click: 'save'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    flex: 1,
                                    itemId: 'cancelButton',
                                    margin: 5,
                                    text: 'Cancel',
                                    listeners: {
                                        click: 'cancelEdit'
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'Add',
                    listeners: {
                        click: 'add'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Edit',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'edit'
                    }
                },
                {
                    xtype: 'button',
                    text: 'Remove',
                    bind: {
                        hidden: '{!record}'
                    },
                    listeners: {
                        click: 'remove'
                    }
                }
            ]
        }
    ]

});